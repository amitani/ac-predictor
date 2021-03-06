import { calcRatingFromHistory, positivizeRating } from "../../../libs/utils/rating";
import { PredictorModel } from "./PredictorModel";

export class CalcFromRankModel extends PredictorModel {
    updateData(rankValue: number, perfValue: number, rateValue: number): void {
        perfValue = this.contest.getPerf(rankValue);
        rateValue = positivizeRating(calcRatingFromHistory(this.history.concat([perfValue])));
        super.updateData(rankValue, perfValue, rateValue);
    }
}
