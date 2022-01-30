import {
    LinearProgrammingResponseInterface,
    ProductInterface,
    ResourceAmountInterface
} from "./interfaces/linear-programing.interface";
import DailyReportInterface from "./interfaces/daily-report.interface";

export default class Backend {
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
