<!--
Forex SL/TP Web App in pure HTML, CSS, and JS
Calculates SL (30 pips) and TP (60 pips) for EUR/USD
Includes buttons to copy SL, TP, or both.
--><!DOCTYPE html><html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Forex SL/TP Calculator</title>
<style>
  body { font-family: Arial, sans-serif; background: linear-gradient(180deg,#f7fafc,#eef2f7); display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
  .card { background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 8px 24px rgba(15,23,42,0.08); max-width: 400px; width: 100%; }
  h1 { font-size: 18px; text-align: center; margin-bottom: 14px; }
  label { font-size: 14px; display: block; margin-bottom: 12px; }
  input[type="text"] { width: 100%; padding: 10px 12px; font-size: 16px; border: 1px solid #e2e8f0; border-radius: 8px; margin-top: 6px; }
  .row { display: flex; gap: 16px; justify-content: center; margin-top: 8px; }
  .result-box { margin-top: 18px; padding: 12px; background: #f8fafc; border: 1px solid #e6eef6; border-radius: 8px; }
  .result-row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 16px; }
  .buttons-row { display: flex; gap: 10px; margin-top: 14px; justify-content: center; flex-wrap: wrap; }
  button { padding: 8px 12px; border-radius: 8px; border: 1px solid #cbd5e1; background: #fff; cursor: pointer; }
  button.primary { background: #0ea5e9; color: #fff; border: none; }
  p.note { font-size: 13px; color: #64748b; text-align: center; margin-top: 12px; }
</style>
</head>
<body>
<div class="card">
  <h1>EUR/USD — SL (30 pips) & TP (60 pips)</h1>
  <label>
    Market Price
    <input type="text" id="price" placeholder="1.08500" value="1.08500">
  </label>
  <div class="row">
    <label><input type="radio" name="type" value="sell"> Sell</label>
    <label><input type="radio" name="type" value="buy" checked> Buy</label>
  </div>
  <div class="result-box">
    <div class="result-row"><strong>SL:</strong> <span id="sl">—</span></div>
    <div class="result-row"><strong>TP:</strong> <span id="tp">—</span></div>
  </div>
  <div class="buttons-row">
    <button onclick="copyText(document.getElementById('sl').innerText)" id="copySl">Copy SL</button>
    <button onclick="copyText(document.getElementById('tp').innerText)" id="copyTp">Copy TP</button>
    <button class="primary" onclick="copyText('SL: ' + document.getElementById('sl').innerText + ' TP: ' + document.getElementById('tp').innerText)" id="copyBoth">Copy Both</button>
  </div>
  <p class="note">All calculations use 1 pip = 0.0001 for EUR/USD. SL = 30 pips, TP = 60 pips.</p>
</div>
<script>
const pip = 0.0001;
const slPips = 30 * pip;
const tpPips = 60 * pip;
const priceInput = document.getElementById('price');
const slEl = document.getElementById('sl');
const tpEl = document.getElementById('tp');
const radios = document.querySelectorAll('input[name="type"]');function calculate() { const p = parseFloat(priceInput.value); const isBuy = document.querySelector('input[name="type"]:checked').value === 'buy'; if (isNaN(p)) { slEl.innerText = '—'; tpEl.innerText = '—'; return; } if (isBuy) { slEl.innerText = (p - slPips).toFixed(5); tpEl.innerText = (p + tpPips).toFixed(5); } else { slEl.innerText = (p + slPips).toFixed(5); tpEl.innerText = (p - tpPips).toFixed(5); } }

function copyText(text) { if (!text || text === '—') return; navigator.clipboard.writeText(text).then(() => alert('Copied: ' + text)); }

priceInput.addEventListener('input', calculate); radios.forEach(r => r.addEventListener('change', calculate)); calculate(); </script>

</body>
</html>
