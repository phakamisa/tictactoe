import React, { Component, lazy, Suspense } from "react";
import "./Game.css";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeContext, themes } from "./theme-context";
//import { isTSExpressionWithTypeArguments } from "@babel/types";

const Board = lazy(() => import("./Board"));
const CustomTextInput = lazy(() => import("./CustomTextInput"));
//const ThemeContext = React.createContext("light");

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      locRow: 0,
      locCol: 0
    };
  }

  handleClick = i => {
    try {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      /*const squares = current.squares.slice();*/
      const squares = { ...current.squares };
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      /* display location (in row/col) of selected square
    const disColLog = (i % 3) + 1;
    const disRowLog = 1;
    if (i.range(3, 5)) {
      disRowLog = 2;
    }
    if (i.range(6, 8)) {
      disRowLog = 3;
    }
    console.log({ disColLog, disRowLog });*/
      squares[i] = this.state.xIsNext ? "X" : "O";

      this.setState({
        history: history.concat([
          {
            squares: squares
          }
        ]),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length,
        locRow: ({ i } % 3) + 1,
        locCol: ({ i } % 3) + 1
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  jumpTo = step => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  };

  static contextType = ThemeContext;
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move # ${move}` : "Go to game start";

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)} theme={this.context}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <ErrorBoundary>
            <Suspense fallback={<div>Loading Board...</div>}>
              <Board
                squares={current.squares}
                onClick={i => this.handleClick(i)}
              />
            </Suspense>
          </ErrorBoundary>
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ol>{moves}</ol>
        </div>
        <div>
          <ErrorBoundary>
            <Suspense fallback={<div>Loading Board...</div>}>
              <ThemeContext.Provider value={themes.dark}>
                <CustomTextInput />
              </ThemeContext.Provider>
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
