export class Utils {
    public static findMax(...args: number[]): number {
        let maxNumber: number;
        args.forEach((number: number) => {
            if (maxNumber != undefined) {
                if (number >= maxNumber) {
                    maxNumber = number
                }
            } else {
                maxNumber = number
            }
        })
        console.log('max', '=', maxNumber)
        return maxNumber;
    }

    public static findMin(...args: number[]): number {
        let minNumber: number;
        args.forEach((number: number) => {
            if (!minNumber) {
                minNumber = number
            } else {
                if (number <= minNumber) {
                    minNumber = number
                }
            }
        })
        console.log('min', '=', minNumber)
        return minNumber;
    }

    public static reformatData(x: any): Record<string, any> {
        const result = x.reduce((previousValue, currentValue) => {
            return (
                {
                    ...previousValue,
                    [currentValue.role]: (previousValue[currentValue.role] || []).concat({nickname: currentValue.name})
                }
            )
        }, {})
        console.log('result', '=', result)
        return result;
    }
}

export default Utils;
