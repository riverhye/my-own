export default function Calendar() {
  // 현재 월의 모든 날짜 -> 생성 -> 4주로

  return (
    <div className="Calendar">
      <div className="CalendarNav">
        <span className="CalendarNav__title">~~년 ~~월</span>
        <div className="calendarNav__Btn">
          <button>&lt; 이전</button>
          <button>다음 &gt;</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>주</th>
          </tr>
        </thead>
        <tbody>
          <tr>날짜마다</tr>
        </tbody>
      </table>
    </div>
  );
}
