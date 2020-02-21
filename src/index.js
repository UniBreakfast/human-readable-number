module.exports = function toReadable(num) {
  if (!num) return 'zero'
  const words = []
  if (num>99) words.push(nums[num/100|0], 'hundred')
  if (num%100>0 && num%100/10>=2) words.push(tens[num%100/10|0])
  if (num%100 && num%100<20) words.push(nums[num%100])
  else if (num%10) words.push(nums[num%10])
  return words.join(' ')
}

const nums = ('zero,one,two,three,four,five,six,seven,eight,nine,ten,' +
              'eleven,twelve,thirteen,fourteen,fifteen,sixteen,' +
              'seventeen,eighteen,nineteen').split(',')
const tens = 'zero,ten,twenty,thirty,forty,fifty,sixty,seventy,eighty,ninety'
              .split(',')
