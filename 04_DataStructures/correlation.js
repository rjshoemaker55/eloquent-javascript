// this is our journal inforation
let journal = [
  {
    events: ['work', 'touched tree', 'pizza', 'running', 'television'],
    squirrel: false,
  },
  {
    events: [
      'work',
      'ice cream',
      'cauliflower',
      'lasagna',
      'touched tree',
      'brushed teeth',
    ],
    squirrel: false,
  },
  {
    events: ['weekend', 'cycling', 'break', 'peanuts', 'beer'],
    squirrel: true,
  },
  {
    events: ['weekend', 'cycling', 'break', 'pizza', 'beer'],
    squirrel: true,
  },
  {
    events: ['weekend', 'cycling', 'break', 'pizza', 'beer'],
    squirrel: false,
  },
  {
    events: ['pizza', 'cycling', 'break', 'peanuts', 'beer'],
    squirrel: true,
  },
];

// this function returns a list of all events
function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

// this function constructs a table based on a journal (above);
function tableFor(journal, event) {
  let table = [0, 0, 0, 0];

  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0;
    if (entry.events.includes(event)) index++;
    if (entry.squirrel) index += 2;
    table[index]++;
  }
  return table;
}

// this function returns the phi coefficient based on a table of [ n00, n01, n10, n11 ]
function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}

// the first number after n is equal to squirrel t/f, the second is whether the event happened t/f
// in this case it is if squirrel is true or false, and if pizza is true or false
let table = [/* n00 */ 76, /* n01 */ 9, /* n10 */ 4, /*  n11 */ 1];

// this will loop through all of the events and find the phi (correlation coefficient) of each relating to squirrel
for (event of journalEvents(journal)) {
  console.log(`Event: ${event}   Phi: ${phi(tableFor(journal, event))}`);
}
