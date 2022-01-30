import {
    LinearProgrammingResponseInterface,
    ProductInterface,
    ResourceAmountInterface
} from "./interfaces/linear-programing.interface";
import DailyReportInterface from "./interfaces/daily-report.interface";

export default class Ex3 {
    static linearProgramming(
        product: ProductInterface,
        resourceAmount: ResourceAmountInterface
    ): LinearProgrammingResponseInterface {
        return
    }

    static groupDailyReports(
        userDailyReports: DailyReportInterface[]
    ): Partial<DailyReportInterface>[] {
        return
    }
}
