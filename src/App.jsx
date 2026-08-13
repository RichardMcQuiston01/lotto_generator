import { useEffect, useRef, useState } from 'react'
import DonateFloat from './DonateFloat.jsx'

const MAIN_MIN = 1
const MAIN_MAX = 69
const MAIN_COUNT = 5
const POWERBALL_MIN = 1
const POWERBALL_MAX = 26
const MIN_SETS = 1
const MAX_SETS = 10

/**
 * Pick a random integer in an inclusive range.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Generate one Powerball set: 5 unique main numbers plus a Powerball.
 * @returns {{ mainNumbers: number[], powerball: number }}
 */
function generatePowerballSet() {
  const pool = []
  for (let n = MAIN_MIN; n <= MAIN_MAX; n += 1) {
    pool.push(n)
  }

  const mainNumbers = []
  while (mainNumbers.length < MAIN_COUNT) {
    const pickIndex = randomInt(0, pool.length - 1)
    mainNumbers.push(pool.splice(pickIndex, 1)[0])
  }

  return {
    mainNumbers: mainNumbers.sort((a, b) => a - b),
    powerball: randomInt(POWERBALL_MIN, POWERBALL_MAX),
  }
}

/**
 * Powerball number generator: pick 1–10 official-format sets and print them.
 * @returns {JSX.Element}
 */
function App() {
  const [numberSets, setNumberSets] = useState([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [setsToGenerate, setSetsToGenerate] = useState(MIN_SETS)
  const [statusMessage, setStatusMessage] = useState('')
  const generateTimerRef = useRef(null)
  const resultsHeadingRef = useRef(null)

  useEffect(() => {
    return () => {
      if (generateTimerRef.current !== null) {
        window.clearTimeout(generateTimerRef.current)
      }
    }
  }, [])

  /**
   * Generate the selected number of unique Powerball sets.
   * @param {React.FormEvent<HTMLFormElement>} [event]
   * @returns {void}
   */
  function generateNumbers(event) {
    event?.preventDefault()
    if (isGenerating) {
      return
    }

    setIsGenerating(true)

    generateTimerRef.current = window.setTimeout(() => {
      const nextSets = Array.from(
        { length: setsToGenerate },
        generatePowerballSet,
      )
      setNumberSets(nextSets)
      setIsGenerating(false)

      const countLabel = nextSets.length === 1
        ? '1 set'
        : `${nextSets.length} sets`
      setStatusMessage(`Generated ${countLabel} of Powerball numbers.`)
      resultsHeadingRef.current?.focus()
    }, 1000)
  }

  /**
   * Clear generated sets so the player can start over.
   * @returns {void}
   */
  function resetNumbers() {
    setNumberSets([])
    setStatusMessage('Generated numbers cleared.')
  }

  /**
   * Open the browser print dialog for the current ticket.
   * @returns {void}
   */
  function printNumbers() {
    window.print()
  }

  const hasSets = numberSets.length > 0
  const generatedOn = new Date().toLocaleDateString()

  return (
    <div className="min-h-screen px-4 py-12">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="visually-hidden" aria-live="polite" aria-atomic="true">
        {statusMessage}
      </div>

      <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow-lg">
        <header>
          <h1 className="mb-8 text-center text-3xl font-bold text-heading">
            Powerball Generator
          </h1>
        </header>

        <main id="main-content" tabIndex={-1}>
          <form
            id="generate-form"
            onSubmit={generateNumbers}
            className="no-print mb-6"
          >
            <label
              htmlFor="sets-to-generate"
              className="mb-2 block text-sm font-medium text-slate-800"
            >
              Number of sets to generate (1–10)
            </label>
            <select
              id="sets-to-generate"
              name="setsToGenerate"
              value={setsToGenerate}
              onChange={(event) => {
                setSetsToGenerate(Number.parseInt(event.target.value, 10))
              }}
              disabled={isGenerating}
              aria-describedby="sets-help"
              className="min-h-12 w-full rounded-md border-2 border-slate-600 bg-white p-3 text-base text-slate-900 focus:border-heading"
            >
              {Array.from({ length: MAX_SETS }, (_, index) => {
                const value = index + 1
                return (
                  <option key={value} value={value}>
                    {value} set{value === 1 ? '' : 's'}
                  </option>
                )
              })}
            </select>
            <p id="sets-help" className="mt-2 text-sm text-slate-700">
              Each set is 5 unique main numbers ({MAIN_MIN}–{MAIN_MAX}) plus
              one Powerball ({POWERBALL_MIN}–{POWERBALL_MAX}).
            </p>
          </form>

          <section aria-labelledby="results-heading" className="mb-8">
            <h2
              id="results-heading"
              ref={resultsHeadingRef}
              tabIndex={-1}
              className="mb-4 text-lg font-semibold text-heading"
            >
              {hasSets ? 'Your numbers' : 'No numbers yet'}
            </h2>

            {hasSets ? (
              <ol className="space-y-6" role="list">
                {numberSets.map((set, setIndex) => (
                  <li
                    key={`set-${setIndex}`}
                    className="rounded-lg border border-slate-300 p-4"
                  >
                    <h3 className="mb-3 text-sm font-medium text-heading">
                      Set {setIndex + 1}
                    </h3>
                    <ol
                      className="flex flex-wrap items-center justify-center gap-2"
                      role="list"
                      aria-label={`Set ${setIndex + 1} numbers`}
                    >
                      {set.mainNumbers.map((number) => (
                        <li key={`main-${number}`} className="ball ball-main">
                          <span className="visually-hidden">Main number </span>
                          {number}
                        </li>
                      ))}
                      <li className="ball ball-power">
                        <span className="visually-hidden">Powerball </span>
                        {set.powerball}
                      </li>
                    </ol>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="py-8 text-center text-slate-700">
                Choose how many sets you want, then generate your Powerball
                numbers.
              </p>
            )}

            <p className="print-only mt-4 text-center text-sm text-slate-700">
              Generated on {generatedOn}
            </p>
          </section>

          <div className="no-print flex flex-col gap-2">
            <button
              type="submit"
              form="generate-form"
              disabled={isGenerating}
              aria-busy={isGenerating}
              className="btn btn-generate"
            >
              {isGenerating ? 'Generating…' : 'Generate numbers'}
            </button>
            {hasSets && (
              <>
                <button
                  type="button"
                  onClick={printNumbers}
                  className="btn btn-print"
                >
                  Print numbers
                </button>
                <button
                  type="button"
                  onClick={resetNumbers}
                  className="btn btn-reset"
                >
                  Reset
                </button>
              </>
            )}
          </div>
        </main>

        <p className="no-print mt-6 text-center text-sm text-slate-700">
          Good luck with your Powerball numbers!{' '}
          <span aria-hidden="true">🍀</span>
        </p>
      </div>

      <footer className="mx-auto mt-8 max-w-md p-4 text-center">
        <p className="mb-2 text-sm text-slate-700">
          This site is not affiliated with Powerball or The Multi-State
          Lottery Association.
        </p>
        <p className="text-sm text-slate-700">
          For official Powerball information, visit{' '}
          <a
            href="https://www.powerball.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-heading underline hover:no-underline"
          >
            www.powerball.com
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
          .
        </p>
      </footer>

      <DonateFloat />
    </div>
  )
}

export default App
