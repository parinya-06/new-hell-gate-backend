import {
    ProductInterface,
    ResourceAmountInterface
} from "./interfaces/linear-programing.interface";
import Ex3 from "./ex3";
import DailyReportInterface from "./interfaces/daily-report.interface";

describe('backend test', () => {
    it('linear programming', () => {
        const resourceAmount: ResourceAmountInterface = {
            resourceA: 250,
            resourceB: 500,
            resourceC: 550,
            resourceD: 1200,
            resourceE: 130,
        }
        const product: ProductInterface = {
            productX: {
                profitPerPiece: 4000,
                useResourceA: 1,
                useResourceB: 4,
                useResourceC: 4,
                useResourceD: 8,
                useResourceE: 1
            },
            productY: {
                profitPerPiece: 7500,
                useResourceA: 2,
                useResourceB: 7,
                useResourceC: 8,
                useResourceD: 16,
                useResourceE: 2
            }
        }
        const actual = Ex3.linearProgramming(product, resourceAmount)
        expect(actual.maximumProfit).toBeGreaterThanOrEqual(500000)
        expect(actual.useResourceA).toBeLessThanOrEqual(250)
        expect(actual.useResourceB).toBeLessThanOrEqual(500)
        expect(actual.useResourceC).toBeLessThanOrEqual(550)
        expect(actual.useResourceD).toBeLessThanOrEqual(1200)
        expect(actual.useResourceE).toBeLessThanOrEqual(130)
    })
})

describe('group daily report', () => {
    it('user daily report', () => {
        const dailyReports: DailyReportInterface[] = [
            {
                team: 'Team-A',
                key: '2021-04-30T00:00:00+07:00',
                type: 'financial',
                date: new Date('2021-04-29T17:00:00.000+00:00'),
                value: {},
            },
            {
                team: 'Team-A',
                key: '2021-04-30T00:00:00+07:00',
                type: 'user',
                date: new Date('2021-04-29T17:00:00.000+00:00'),
                value: {},
            },
            {
                team: 'Team-A',
                key: '2021-04-30T00:00:00+07:00',
                type: 'credit',
                date: new Date('2021-04-29T17:00:00.000+00:00'),
                value: {},
            },
        ]
        expect(Ex3.groupDailyReports(dailyReports)).toMatchObject(dailyReports)
    })

    it('group daily report financial', () => {
        const dailyReports: DailyReportInterface[] = [
            {
                team: 'Team-A',
                key: '2021-04-30T00:00:00+07:00',
                type: 'financial',
                date: new Date('2021-04-29T17:00:00.000+00:00'),
                value: {
                    newUserDeposit: {
                        amount: 6,
                        success: 6,
                        failure: 6,
                        count: 6,
                    },
                },
            },
            {
                team: 'Team-B',
                key: '2021-04-30T00:00:00+07:00',
                type: 'financial',
                date: new Date('2021-04-29T17:00:00.000+00:00'),
                value: {
                    newUserDeposit: {
                        amount: 5,
                        success: 5,
                        failure: 5,
                        count: 5,
                    },
                },
            },
        ]

        const expected = [
            {
                key: '2021-04-30T00:00:00+07:00',
                type: 'financial',
                date: new Date('2021-04-29T17:00:00.000+00:00'),
                value: {
                    newUserDeposit: {
                        amount: 11,
                        success: 11,
                        failure: 11,
                        count: 11,
                    },
                },
            },
        ]

        expect(Ex3.groupDailyReports(dailyReports)).toMatchObject(expected)
    })

    it('group daily report credit', () => {
        const dailyReports: DailyReportInterface[] = [
            {
                team: 'Team-A',
                key: '2021-04-30T00:00:00+07:00',
                type: 'credit',
                date: new Date('2021-04-29T17:00:00.000+00:00'),
                value: {
                    creditDailyReport: {
                        memberProfit: 3,
                        companyProfit: 3,
                        commission: 3,
                        activeMember: 3,
                    },
                },
            },
            {
                team: 'Team-B',
                key: '2021-04-30T00:00:00+07:00',
                type: 'credit',
                date: new Date('2021-04-29T17:00:00.000+00:00'),
                value: {
                    creditDailyReport: {
                        memberProfit: 5,
                        companyProfit: 5,
                        commission: 5,
                        activeMember: 5,
                    },
                },
            },
        ]

        const expected = [
            {
                key: '2021-04-30T00:00:00+07:00',
                type: 'credit',
                date: new Date('2021-04-29T17:00:00.000+00:00'),
                value: {
                    creditDailyReport: {
                        memberProfit: 8,
                        companyProfit: 8,
                        commission: 8,
                        activeMember: 8,
                    },
                },
            },
        ]

        expect(Ex3.groupDailyReports(dailyReports)).toMatchObject(expected)
    })

    it('group each type without bonus type', () => {
        const dailyReports: DailyReportInterface[]  = [
            {
                team: 'Team-A',
                key: '2021-04-30T00:00:00+07:00',
                type: 'financial',
                date: new Date('2021-04-29T17:00:00.000+00:00'),
                value: {
                    newUserDeposit: {
                        amount: 3,
                        success: 3,
                        failure: 3,
                        count: 3,
                    },
                    newUserWithdrawal: {
                        amount: 3,
                        success: 3,
                        failure: 3,
                        count: 3,
                    },
                    deposit: {
                        amount: 3,
                        success: 3,
                        failure: 3,
                    },
                    withdrawal: {
                        creditAmount: 3,
                        revenueAmount: 3,
                        count: 3,
                        creditFailure: 3,
                        revenueFailure: 3,
                        creditCount: 3,
                        revenueCount: 3,
                        success: 3,
                        amount: 3,
                    },
                    credit: {
                        creditRemain: 3,
                        revenueRemain: 3,
                    },
                },
            },
            {
                team: 'Team-B',
                key: '2021-04-30T00:00:00+07:00',
                type: 'financial',
                date: new Date('2021-04-29T17:00:00.000+00:00'),
                value: {
                    newUserDeposit: {
                        amount: 9,
                        success: 9,
                        failure: 9,
                        count: 9,
                    },
                    newUserWithdrawal: {
                        amount: 9,
                        success: 9,
                        failure: 9,
                        count: 9,
                    },
                    deposit: {
                        amount: 9,
                        success: 9,
                        failure: 9,
                    },
                    withdrawal: {
                        creditAmount: 9,
                        revenueAmount: 9,
                        count: 9,
                        creditFailure: 9,
                        revenueFailure: 9,
                        creditCount: 9,
                        revenueCount: 9,
                        success: 9,
                        amount: 9,
                    },
                    credit: {
                        creditRemain: 9,
                        revenueRemain: 9,
                    },
                },
            },
            {
                team: 'Team-B',
                key: '2021-04-30T00:00:00+07:00',
                type: 'user',
                date: new Date('2021-04-29T17:00:00.000+00:00'),
                value: {
                    userDailyReport: {
                        userCount: 5,
                        newUserCount: 5,
                        activeUserCount: 5,
                    },
                },
            },
            {
                team: 'Team-A',
                key: '2021-04-30T00:00:00+07:00',
                type: 'user',
                date: new Date('2021-04-29T17:00:00.000+00:00'),
                value: {
                    userDailyReport: {
                        userCount: 1,
                        newUserCount: 1,
                        activeUserCount: 0,
                    },
                },
            },
            {
                team: 'Team-A',
                key: '2021-04-30T00:00:00+07:00',
                type: 'credit',
                date: new Date('2021-04-29T17:00:00.000+00:00'),
                value: {
                    creditDailyReport: {
                        memberProfit: 3,
                        companyProfit: 3,
                        commission: 3,
                        activeMember: 3,
                    },
                },
            },
            {
                team: 'Team-B',
                key: '2021-04-30T00:00:00+07:00',
                type: 'credit',
                date: new Date('2021-04-29T17:00:00.000+00:00'),
                value: {
                    creditDailyReport: {
                        memberProfit: 4,
                        companyProfit: 4,
                        commission: 4,
                        activeMember: 4,
                    },
                },
            },
        ]

        const expected = [
            {
                key: '2021-04-30T00:00:00+07:00',
                type: 'financial',
                date: new Date('2021-04-29T17:00:00.000+00:00'),
                value: {
                    newUserDeposit: {
                        amount: 12,
                        success: 12,
                        failure: 12,
                        count: 12,
                    },
                    newUserWithdrawal: {
                        amount: 12,
                        success: 12,
                        failure: 12,
                        count: 12,
                    },
                    deposit: {
                        amount: 12,
                        success: 12,
                        failure: 12,
                    },
                    withdrawal: {
                        creditAmount: 12,
                        revenueAmount: 12,
                        count: 12,
                        creditFailure: 12,
                        revenueFailure: 12,
                        creditCount: 12,
                        revenueCount: 12,
                        success: 12,
                        amount: 12,
                    },
                    credit: {
                        creditRemain: 12,
                        revenueRemain: 12,
                    },
                },
            },
            {
                key: '2021-04-30T00:00:00+07:00',
                type: 'user',
                date: new Date('2021-04-29T17:00:00.000+00:00'),
                value: {
                    userDailyReport: {
                        userCount: 6,
                        newUserCount: 6,
                        activeUserCount: 5,
                    },
                },
            },
            {
                key: '2021-04-30T00:00:00+07:00',
                type: 'credit',
                date: new Date('2021-04-29T17:00:00.000+00:00'),
                value: {
                    creditDailyReport: {
                        memberProfit: 7,
                        companyProfit: 7,
                        commission: 7,
                        activeMember: 7,
                    },
                },
            },
        ]

        expect(Ex3.groupDailyReports(dailyReports)).toMatchObject(expected)
    })

    it('group bonus type', () => {
        const dailyReports: DailyReportInterface[]  = [
            {
                team: 'Team-B',
                date: new Date('2021-04-29T17:00:00.000Z'),
                key: '2021-04-30T00:00:00+07:00',
                type: 'bonus',
                value: {
                    bonusDailyReport: {
                        amount: 8,
                        count: 8,
                        userCount: 8,
                        category: [
                            {
                                amount: 7,
                                category: 'cashback',
                                count: 2,
                                userCount: 2,
                            },
                            {
                                amount: 3,
                                category: 'cashback666',
                                count: 1,
                                userCount: 1,
                            },
                            {
                                amount: 2,
                                category: 'cashback55',
                                count: 2,
                                userCount: 2,
                            },
                        ],
                    },
                },
            },
            {
                team: 'Team-A',
                date: new Date('2021-04-29T17:00:00.000Z'),
                key: '2021-04-30T00:00:00+07:00',
                type: 'bonus',
                value: {
                    bonusDailyReport: {
                        amount: 2,
                        count: 2,
                        userCount: 2,
                        category: [
                            {
                                amount: 2,
                                category: 'cashback',
                                count: 2,
                                userCount: 2,
                            },
                            {
                                amount: 2,
                                category: 'cashback55',
                                count: 2,
                                userCount: 2,
                            },
                        ],
                    },
                },
            },
        ]
        const expected = [
            {
                date: new Date('2021-04-29T17:00:00.000Z'),
                key: '2021-04-30T00:00:00+07:00',
                type: 'bonus',
                value: {
                    bonusDailyReport: {
                        amount: 10,
                        count: 10,
                        userCount: 10,
                        category: [
                            {
                                amount: 9,
                                category: 'cashback',
                                count: 4,
                                userCount: 4,
                            },
                            {
                                amount: 4,
                                category: 'cashback55',
                                count: 4,
                                userCount: 4,
                            },
                            {
                                amount: 3,
                                category: 'cashback666',
                                count: 1,
                                userCount: 1,
                            },
                        ],
                    },
                },
            },
        ]

        expect(Ex3.groupDailyReports(dailyReports)).toMatchObject(expected)
    })
})
