//HTMLから要素の取得
const time = document.getElementById(`time`);
const startB = document.getElementById(`start`);
const stopB = document.getElementById(`stop`);
const resetB = document.getElementById(`reset`);

//カウント用の変数を作成
let startTime;
let stopTime = 0;
let timeout;

//ストップウォッチ表示用の時間を取得
function timeToCalculate(){
    const current = new Date(Date.now() - startTime + stopTime);
    const hour = String(current.getHours()-9);
    const min = String(current.getMinutes());
    const sec = String(current.getSeconds());
    const msec = String(current.getMilliseconds()).slice(0, 1);

    time.textContent = `${hour}:${min}:${sec}:${msec}`;
}

//スタートボタンをクリックしたらカウント開始
startB.addEventListener('click', function() {
    startB.disabled = true;
    stopB.disabled = false;
    resetB.disabled = true;
    startTime = Date.now();
    timeout = setInterval(timeToCalculate, 100);
    timeToCalculate();
  });

//ストップボタンをクリックしたら一時停止してスタート時からの差を表示
stopB.addEventListener('click', function() {
    startB.disabled = false;
    stopB.disabled = true;
    resetB.disabled = false;
    clearInterval(timeout);
    stopTime += (Date.now() - startTime);
});

//リセットボタンをクリックしたら表示を0にリセット
resetB.addEventListener('click', function() {
    startB.disabled = false;
    stopB.disabled = true;
    resetB.disabled = true;
    time.textContent= `0:0:0:0`;
    stopTime = 0;
});