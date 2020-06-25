
const getSleepHours = day => {
  day = day.toLowerCase();
  switch (day) {
    case 'monday':
    return 8;
    case 'tuesday':
    return 8;
    case 'wednesday':
    return 9;
    case 'thursday':
    return 7;
    case 'friday':
    return 5;
    case 'saturday':
    return 8;
    case 'sunday':
    return 9;
  }
};

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep, you had ' + (actualSleepHours - idealSleepHours) + ' extra hours of sleep');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep than you needed, , you had ' + (actualSleepHours - idealSleepHours) + ' extra hours of sleep');
    } else {
      console.log('You need to get some rest, you had ' + (actualSleepHours - idealSleepHours) + ' extra hours of sleep');
    }
};

calculateSleepDebt();