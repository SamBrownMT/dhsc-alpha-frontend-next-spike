"use client";

import React from "react";
import { MetricCardData } from "../../data/interfaces/MetricCardData";
import MetricCard from "./metric-card/MetricCard";
import CapacityTrackerTotalHoursAgencyWorkedByRegionService from "../../services/capacity-tracker/CapacityTrackerTotalHoursAgencyWorkedByRegionService";
import { CapacityTrackerTotalHoursAgencyWorked } from "@/data/interfaces/CapacityTrackerTotalHoursAgencyWorked";

type Props = {
  capacityTrackerTotalHoursAgencyWorkedByRegionData: CapacityTrackerTotalHoursAgencyWorked[]; // needs to be changed
  capacityTrackerTotalHoursAgencyWorkedByLaData: CapacityTrackerTotalHoursAgencyWorked[]; // needs to be changed
};

const MetricCardsContainer: React.FC<Props> = ({
  capacityTrackerTotalHoursAgencyWorkedByRegionData,
  capacityTrackerTotalHoursAgencyWorkedByLaData,
}) => {
  const capacityTrackerService = new CapacityTrackerTotalHoursAgencyWorkedByRegionService(
    capacityTrackerTotalHoursAgencyWorkedByRegionData,
    capacityTrackerTotalHoursAgencyWorkedByLaData
  );

  const metricCardsData: Array<MetricCardData> = [
    capacityTrackerService.getMetricCardData(),
  ];

  return (
    <div>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-full">
          <h3 className="govuk-heading-s">Headline metrics</h3>
        </div>
      </div>
      {metricCardsData.map((_, index) => {
        if (index % 2 === 0) {
          return (
            <div className="govuk-grid-row" key={index}>
              <div className="govuk-grid-column-one-half">
                <MetricCard data={metricCardsData[index]} />
              </div>
              {metricCardsData[index + 1] && (
                <div className="govuk-grid-column-one-half">
                  <MetricCard data={metricCardsData[index + 1]} />
                </div>
              )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default MetricCardsContainer;
