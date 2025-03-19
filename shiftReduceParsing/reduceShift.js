const allowedTokens = ['id', '+', '*', '(', ')', '$'];

document.getElementById('prevStep').addEventListener('click', () => {
  if(mockParserState.currentStep > 0) {
      mockParserState.currentStep--;
      updateDisplay();
  }
});

document.getElementById('nextStep').addEventListener('click', () => {
  if(mockParserState.currentStep < mockParserState.steps.length - 1) {
      mockParserState.currentStep++;
      updateDisplay();
  }
});

function updateHistoryTable() {
  const tbody = document.querySelector('#stepTable tbody');
  tbody.innerHTML = mockParserState.steps
      .map((step, index) => `
          <tr ${index === mockParserState.currentStep ? 'class="current-step"' : ''}>
              <td>${index + 1}</td>
              <td>${step.stack.join(' ')}</td>
              <td>${step.input.join(' ')}</td>
              <td>${step.action}</td>
          </tr>
      `)
      .join('');
}

document.getElementById('parseButton').addEventListener('click', () => {
  const input = document.getElementById('inputExpr').value.trim();
  const tokens = tokenize(input);
  initializeParser(tokens);
});