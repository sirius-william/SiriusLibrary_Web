export function formatTime(time) {
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    let hour_ = time.getHours();
    let hour = hour_ < 10 ? "0" + hour_ : hour_;
    let _minute = time.getMinutes();
    let minute = _minute < 10 ? "0" + _minute : _minute;
    let _second = time.getSeconds();
    let second = _second < 10 ? "0" + _second : _second;
    return year + "年" + month + "月" + day + "日" + " " + hour + ":" + minute + ":" + second;
}