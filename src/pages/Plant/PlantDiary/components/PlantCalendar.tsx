import { DayPicker } from 'react-day-picker';

interface PlantCalendarProps {
  selectDate: Date;
  setSelectDate: (date: Date) => void;
}

export default function PlantCalendar({
  selectDate,
  setSelectDate,
}: PlantCalendarProps) {
  const today = new Date();

  return (
    <div className="flex items-center justify-center">
      <DayPicker
        mode="single"
        selected={selectDate}
        onSelect={setSelectDate}
        disabled={date => date > today}
        className="w-full"
        styles={{
          root: { width: '80%' },
          months: { width: '100%' },
          month: { width: '100%' },
          table: { width: '100%' },
        }}
        classNames={{
          months: 'w-full',
          month: 'w-full',
          caption: 'flex justify-between items-center mb-4',
          caption_label: 'text-lg  font-semibold',
          nav: 'flex items-center space-x-6',
          nav_button:
            'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-7 w-7',
          table: 'w-full border-collapse',
          head_row: 'flex w-full mt-4',
          head_cell:
            'w-[14.28%] text-center text-muted-foreground font-normal text-sm py-2',
          row: 'flex w-full mt-2',
          cell: 'w-[14.28%] text-center relative p-0',
          day: 'w-12 h-12 mx-auto flex items-center justify-center rounded-md text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          day_selected:
            'bg-blue-500 text-white hover:bg-blue-500/90 hover:text-white focus:bg-blue-500',
          day_today: 'border border-1',
          day_outside: 'text-muted-foreground opacity-50',
          day_disabled:
            'text-muted-foreground opacity-50 hover:bg-transparent hover:text-muted-foreground cursor-not-allowed',
        }}
        components={{
          IconLeft: () => (
            <span className="p-4 text-lg font-semibold text-blue-500">←</span>
          ),
          IconRight: () => (
            <span className="p-4 text-lg font-semibold text-blue-500">→</span>
          ),
        }}
      />
    </div>
  );
}
