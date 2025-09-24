import { useState } from 'react'

function App() {
  const [numberSets, setNumberSets] = useState([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [setsToGenerate, setSetsToGenerate] = useState(1)
  const [checkingWins, setCheckingWins] = useState(false)

  const checkNumbersHistory = async (mainNumbers, powerball) => {
    // Due to CORS restrictions, we cannot directly call the Powerball API from the browser
    // This would require a backend proxy server or CORS-enabled API

    // For demonstration purposes, we'll simulate a response
    // In a real implementation, you would need to:
    // 1. Create a backend API endpoint that proxies the Powerball API
    // 2. Call your backend endpoint from here instead

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Simulate random results for demonstration
      // In reality, this would be the actual API response
      const hasMatches = Math.random() < 0.1 // 10% chance of having won before

      return {
        matches: hasMatches ? [{ date: '2024-01-01', prize: 'Example' }] : []
      }
    } catch (error) {
      console.error('Error checking number history:', error)
      return null
    }
  }

  const generatePowerballSet = () => {
    // Generate 5 unique main numbers from 1-69
    const mainNumbers = []
    while (mainNumbers.length < 5) {
      const num = Math.floor(Math.random() * 69) + 1
      if (!mainNumbers.includes(num)) {
        mainNumbers.push(num)
      }
    }

    // Generate 1 Powerball number from 1-26
    const powerball = Math.floor(Math.random() * 26) + 1

    return {
      mainNumbers: mainNumbers.sort((a, b) => a - b),
      powerball: powerball,
      hasWon: null
    }
  }

  const generateNumbers = () => {
    setIsGenerating(true)
    setTimeout(() => {
      const newSets = []
      for (let i = 0; i < setsToGenerate; i++) {
        newSets.push(generatePowerballSet())
      }
      setNumberSets(newSets)
      setIsGenerating(false)
    }, 1000)
  }

  const resetNumbers = () => {
    setNumberSets([])
  }

  const printNumbers = () => {
    const printWindow = window.open('', '_blank')
    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Powerball Numbers</title>
          <style>
            body {
              font-family: 'proxima-nova', 'Open Sans', Arial, sans-serif;
              margin: 20px;
              color: #333;
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
              border-bottom: 2px solid #6D2E5B;
              padding-bottom: 10px;
            }
            .set {
              margin-bottom: 20px;
              page-break-inside: avoid;
            }
            .set-title {
              font-weight: bold;
              color: #6D2E5B;
              margin-bottom: 10px;
            }
            .numbers {
              display: flex;
              gap: 15px;
              align-items: center;
              flex-wrap: wrap;
            }
            .number {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              font-size: 18px;
              border: 2px solid #333;
            }
            .main-number {
              background: #f5f5f5;
              color: #333;
            }
            .powerball {
              background: #D1A954;
              color: #000;
            }
            .footer {
              margin-top: 40px;
              text-align: center;
              font-size: 12px;
              color: #666;
              border-top: 1px solid #ccc;
              padding-top: 10px;
            }
            @media print {
              body { margin: 0; }
              .header { margin-bottom: 20px; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Powerball Numbers</h1>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
          </div>
          ${numberSets.map((set, index) => `
            <div class="set">
              <div class="set-title">Set ${index + 1}</div>
              <div class="numbers">
                ${set.mainNumbers.map(num => `
                  <div class="number main-number">${num}</div>
                `).join('')}
                <div class="number powerball">${set.powerball}</div>
              </div>
            </div>
          `).join('')}
          <div class="footer">
            <p>This site is not affiliated with Powerball or The Multi-State Lottery Association.</p>
            <p>For official Powerball information, visit www.powerball.com</p>
          </div>
        </body>
      </html>
    `

    printWindow.document.write(printContent)
    printWindow.document.close()
    printWindow.focus()
    setTimeout(() => {
      printWindow.print()
      printWindow.close()
    }, 250)
  }

  const checkAllSetsForWins = async () => {
    if (numberSets.length === 0) return

    setCheckingWins(true)
    const updatedSets = []

    for (let set of numberSets) {
      const winData = await checkNumbersHistory(set.mainNumbers, set.powerball)
      updatedSets.push({
        ...set,
        hasWon: winData ? (winData.matches && winData.matches.length > 0) : false
      })
    }

    setNumberSets(updatedSets)
    setCheckingWins(false)
  }

  return (
    <div className="min-h-screen py-12 px-4" style={{backgroundColor: '#F8F4E6'}}>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8" style={{color: '#6D2E5B'}}>
          Powerball Generator
        </h1>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of sets to generate (1-10):
          </label>
          <select
            value={setsToGenerate}
            onChange={(e) => setSetsToGenerate(parseInt(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:border-2"
            style={{focusRingColor: '#D1A954', focusBorderColor: '#D1A954'}}
            disabled={isGenerating}
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} set{i > 0 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-8">
          {numberSets.length > 0 ? (
            <div className="space-y-6">
              {numberSets.map((set, setIndex) => (
                <div key={setIndex} className={`border rounded-lg p-4 ${set.hasWon === true ? 'border-green-500 bg-green-50' : set.hasWon === false ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}>
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-sm font-medium" style={{color: '#6D2E5B'}}>
                      Set {setIndex + 1}
                    </div>
                    {set.hasWon === true && (
                      <span className="text-xs text-green-600 font-semibold">🎉 Winner!</span>
                    )}
                    {set.hasWon === false && (
                      <span className="text-xs text-red-600">No matches</span>
                    )}
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    {set.mainNumbers.map((number, index) => (
                      <div
                        key={index}
                        className="text-black rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-lg"
                        style={{background: 'radial-gradient(circle at 50% 25%, #fff, #bbb)'}}
                        title={number.toString()}
                      >
                        {number}
                      </div>
                    ))}
                    <div className="text-black rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-lg" style={{background: 'radial-gradient(circle at 50% 25%, #D1A954, #B8944A)'}} title={set.powerball.toString()}>
                      {set.powerball}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              Click "Generate Numbers" to get your Powerball numbers!
            </div>
          )}
        </div>

        <div>
          <button
            onClick={generateNumbers}
            disabled={isGenerating}
            className="w-full disabled:opacity-50 text-black font-bold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105 disabled:hover:scale-100"
            style={{background: 'linear-gradient(to bottom, #D1A954, #B8944A)', border: '2px solid #8D6E34'}}
            onMouseEnter={(e) => !isGenerating && (e.target.style.background = 'linear-gradient(to bottom, #B8944A, #A0803C)')}
            onMouseLeave={(e) => !isGenerating && (e.target.style.background = 'linear-gradient(to bottom, #D1A954, #B8944A)')}
          >
            {isGenerating ? 'Generating...' : 'Generate Numbers'}
          </button>

          {numberSets.length > 0 && (
            <button
              onClick={printNumbers}
              className="w-full text-black font-bold py-2 px-6 rounded-lg transition duration-300 mt-2"
              style={{background: 'linear-gradient(to bottom, #5EBFB6, #4EA8A0)', border: '2px solid #2E7A73'}}
              onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to bottom, #4EA8A0, #3D8B84)'}
              onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to bottom, #5EBFB6, #4EA8A0)'}
            >
              Print Numbers
            </button>
          )}

          {numberSets.length > 0 && (
            <button
              onClick={resetNumbers}
              className="w-full text-black font-bold py-2 px-6 rounded-lg transition duration-300 mt-2"
              style={{background: 'linear-gradient(to bottom, #fff, #bbb)', border: '2px solid #888'}}
              onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to bottom, #eee, #999)'}
              onMouseLeave={(e) => e.target.style.background = 'linear-gradient(to bottom, #fff, #bbb)'}
            >
              Reset
            </button>
          )}
        </div>

        <p className="text-sm text-gray-600 text-center mt-6">
          Good luck with your Powerball numbers! 🍀
        </p>
      </div>

      <footer className="max-w-md mx-auto mt-8 p-4 text-center">
        <div className="text-xs text-gray-500 leading-relaxed">
          <p className="mb-2">
            This site is not affiliated with Powerball or The Multi-State Lottery Association.
          </p>
          <p>
            For official Powerball information, visit{' '}
            <a
              href="https://www.powerball.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
              style={{color: '#D1A954'}}
            >
              www.powerball.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App