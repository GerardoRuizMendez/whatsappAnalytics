import { DataRows } from "./dataRows";

const monthsArray = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const weekDays = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

export default class dataFrame {
  public rows: DataRows[];

  constructor(lines: string[]) {
    const dates: string[] = [];
    const times: string[] = [];
    const senders: string[] = [];
    const messages: string[] = [];

    lines.forEach((line) => {
      if (line === "") return;
      const parts = line.trim().split(" - ");
      if (parts.length >= 2) {
        const [date, time] = parts[0].trim().split(", ");
        if (!date || !time) return;

        const [sender, message] = parts[1].trim().split(": ");
        if (!sender || !message) return;

        dates.push(date);
        times.push(time);
        senders.push(sender);
        messages.push(message);
      } else {
        messages[messages.length - 1] += " " + line.trim();
      }
    });

    this.rows = dates.map((date, index) => ({
      Date: date,
      Time: times[index],
      Sender: senders[index],
      Message: messages[index],
    }));
  }

  public messagesBySender() {
    const senderCounts: { [key: string]: number } = {};
    this.rows.forEach((data) => {
      senderCounts[data.Sender] = (senderCounts[data.Sender] || 0) + 1;
    });

    return {
      senders: Object.keys(senderCounts),
      messages: Object.values(senderCounts),
    };
  }

  public messagesByMonth() {
    const senderCounts: { [key: string]: number } = {};
    const firstDayDate = new Date(this.rows[0].Date);
    const lastDayDate = new Date(this.rows[this.rows.length - 1].Date);

    for (let d = firstDayDate; d <= lastDayDate; d.setMonth(d.getMonth() + 1)) {
      const month = monthsArray[d.getMonth()];
      const year = d.getFullYear();
      senderCounts[`${month} ${year}`] = 0;
    }

    this.rows.forEach((data) => {
      const date = new Date(data.Date);
      const label = `${monthsArray[date.getMonth()]} ${date.getFullYear()}`;

      senderCounts[label] = (senderCounts[label] || 0) + 1;
    });

    const series = Object.values(senderCounts).map((n) => (n == 0 ? null : n));

    return {
      labels: Object.keys(senderCounts),
      series,
    };
  }

  public senderCountByMonth() {
    const senderCountsByMonth: {
      sender: string;
      counts: (number | null)[];
      labels: string[];
    }[] = [];
    let firstDayDate = new Date(this.rows[0].Date);
    const lastDayDate = new Date(this.rows[this.rows.length - 1].Date);

    const countsMap: { [sender: string]: { [month: string]: number } } = {};
    this.rows.forEach((data) => {
      const date = new Date(data.Date);
      const month = monthsArray[date.getMonth()];
      const year = date.getFullYear();
      const label = `${month} ${year}`;

      if (!countsMap[data.Sender]) {
        const aux: { [key: string]: number } = {};
        firstDayDate = new Date(this.rows[0].Date);
        for (
          let d = firstDayDate;
          d <= lastDayDate;
          d.setMonth(d.getMonth() + 1)
        ) {
          const month = monthsArray[d.getMonth()];
          const year = d.getFullYear();
          aux[`${month} ${year}`] = 0;
        }
        countsMap[data.Sender] = aux;
      }
      countsMap[data.Sender][label] = (countsMap[data.Sender][label] || 0) + 1;
    });
    //console.log(countsMap);

    for (const sender in countsMap) {
      const countsArray: (number | null)[] = Object.values(
        countsMap[sender]
      ).map((n) => (n == 0 ? null : n));
      const labels = Object.keys(countsMap[sender]);
      senderCountsByMonth.push({ sender, counts: countsArray, labels });
    }
    //console.log(senderCountsByMonth);
    return senderCountsByMonth;
  }

  public messagesCountByWeek() {
    const counts: { [sender: string]: { [day: string]: number } } = {};
    const weekCount: { sender: string; counts: number[]; labels: string[] }[] =
      [];

    this.rows.forEach((data) => {
      const date = new Date(data.Date);
      const aux: { [key: string]: number } = {};
      if (!counts[data.Sender]) {
        weekDays.forEach((day) => {
          aux[day] = 0;
        });
        counts[data.Sender] = aux;
      } else {
        counts[data.Sender][weekDays[(date.getDay() + 6) % 7]]++;
      }
    });

    for (const sender in counts) {
      weekCount.push({
        sender,
        counts: Object.values(counts[sender]),
        labels: Object.keys(counts[sender]),
      });
    }

    return weekCount;
  }

  public renameSenders(newSenders: string[], lastSender: string[]) {
    this.rows.forEach((data) => {
      if (lastSender.includes(data.Sender)) {
        data.Sender = newSenders[lastSender.indexOf(data.Sender)];
      }
    });
  }

  // public renameSenders(newSenders: string[], lastSenders: string[]): void {
  //   if (newSenders.length !== lastSenders.length) {
  //     throw new Error('Los arrays newSenders y lastSenders deben tener la misma longitud.');
  //   }

  //   const senderMap = new Map<string, string>();
  //   for (let i = 0; i < lastSenders.length; i++) {
  //     senderMap.set(lastSenders[i], newSenders[i]);
  //   }

  //   this.rows.forEach((data) => {
  //     if (senderMap.has(data.Sender)) {
  //       data.Sender = senderMap.get(data.Sender)!;
  //     }
  //   });
  // }
}
