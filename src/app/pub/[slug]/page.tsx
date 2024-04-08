const sampledata = [
	{
		tableNumber: 0,
		name: "showdown",
		prize: 1600000,
		nextLv: 14,
		entries: 55,
		player: 22,
		stacks: { total: 3080000, avg: 140000 },
		buyIn: { start: 50000, reBuyIn: 60000 },
		duration: { current: 4, max: 8 },
		totalTime: { HH: "00", MM: "00", SS: "00" },
	},
	{
		tableNumber: 1,
		name: "showdown",
		prize: 1600000,
		nextLv: 14,
		entries: 55,
		player: 22,
		stacks: { total: 3080000, avg: 140000 },
		buyIn: { start: 50000, reBuyIn: 60000 },
		duration: { current: 4, max: 8 },
		totalTime: { HH: "00", MM: "00", SS: "00" },
	},
	{
		tableNumber: 2,
		name: "showdown",
		prize: 1600000,
		nextLv: 14,
		entries: 55,
		player: 22,
		stacks: { total: 3080000, avg: 140000 },
		buyIn: { start: 50000, reBuyIn: 60000 },
		duration: { current: 4, max: 8 },
		totalTime: { HH: "00", MM: "00", SS: "00" },
	},
	{
		tableNumber: 3,
		name: "showdown",
		prize: 1600000,
		nextLv: 14,
		entries: 55,
		player: 22,
		stacks: { total: 3080000, avg: 140000 },
		buyIn: { start: 50000, reBuyIn: 60000 },
		duration: { current: 4, max: 8 },
		totalTime: { HH: "00", MM: "00", SS: "00" },
	},
	{
		tableNumber: 4,
		name: "showdown",
		prize: 1600000,
		nextLv: 14,
		entries: 55,
		player: 22,
		stacks: { total: 3080000, avg: 140000 },
		buyIn: { start: 50000, reBuyIn: 60000 },
		duration: { current: 4, max: 8 },
		totalTime: { HH: "00", MM: "00", SS: "00" },
	},
];

export default function Page() {
	return (
		<div className="grid grid-cols-tableListGrid auto-rows-tableListGrid gap-3 w-full">
			{sampledata.map((v, i) => {
				return (
					<div
						className="bg-primary-500 rounded-md grid grid-cols-tableInfoGrid grid-rows-tableInfoGrid"
						key={v.tableNumber}
					></div>
				);
			})}
		</div>
	);
}
