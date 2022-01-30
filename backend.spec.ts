import {
    ProductInterface,
    ResourceAmountInterface
} from "./interfaces/linear-programing.interface";
import {Backend} from "./backend";

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
        const actual = Backend.linearProgramming(product, resourceAmount)
        expect(actual.maximumProfit).toBeGreaterThanOrEqual(500000)
        expect(actual.useResourceA).toBeLessThanOrEqual(250)
        expect(actual.useResourceB).toBeLessThanOrEqual(500)
        expect(actual.useResourceC).toBeLessThanOrEqual(550)
        expect(actual.useResourceD).toBeLessThanOrEqual(1200)
        expect(actual.useResourceE).toBeLessThanOrEqual(130)
    })
})
