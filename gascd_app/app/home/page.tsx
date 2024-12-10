import "../../src/styles/main.scss";
import React from "react";
import Layout from "../../src/components/common/layout/Layout";
import { Breadcrumb } from "../../src/data/interfaces/Breadcrumb";
import MetricCardsContainer from "../../src/components/metric-components/MetricCardsContainer";
import HomePageAddFavouriteMetricsPanel from "../../src/components/home-page-components/home-page-add-favourite-metrics-panel/FavouriteMetricsPanel";
import DataCategoriesSidePanel from "../../src/components/common/panels/data-categories-side-panel/DataCategoriesSidePanel";
import MainCategoriesSearch from "../../src/components/common/main-categories-search/MainCategoriesSearch";
import OrganisationFilter from "../../src/components/common/organisation-filter/OrganisationFilter";
import YourFavouriteMetricsSidePanel from "../../src/components/common/panels/your-favourite-metrics-side-panel/YourFavouriteMetricsSidePanel";
import DataGuideSidePanel from "../../src/components/common/panels/data-guide-side-panel/DataGuideSidePanel";
import ReportLinksSidePanel from "../../src/components/common/panels/report-links-side-panel/ReportLinksSidePanel";
import KnowledgeCentreSidePanel from "../../src/components/common/panels/knowledge-centre-side-panel/KnowledgeCentreSidePanel";
import { getCapacityTrackerData } from "../../src/api/api";

export default async function HomePage() {
  const capacityTrackerTotalHoursAgencyWorkedByRegionData = await getCapacityTrackerData("region");
  const capacityTrackerTotalHoursAgencyWorkedByLaData = await getCapacityTrackerData("la");

  const breadcrumbs: Array<Breadcrumb> = [
    {
      text: "Homepage",
      url: "/home",
    },
  ];

  return (
    <Layout
      autoSpaceMainContent={false}
      breadcrumbs={breadcrumbs}
      showLoginInformation={true}
    >
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-third">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <h1 className="govuk-heading-l">Homepage</h1>
              <DataCategoriesSidePanel />
              <YourFavouriteMetricsSidePanel />
              <DataGuideSidePanel />
              <ReportLinksSidePanel />
              <KnowledgeCentreSidePanel />
            </div>
          </div>
        </div>
        <div className="govuk-grid-column-two-thirds">
          <MainCategoriesSearch />
          <hr className="govuk-section-break govuk-section-break--s govuk-section-break--visible govuk-!-margin-bottom-3"></hr>
          <OrganisationFilter />
          <hr className="govuk-section-break govuk-section-break--s govuk-section-break--visible govuk-!-margin-bottom-7"></hr>
          <MetricCardsContainer
            capacityTrackerTotalHoursAgencyWorkedByRegionData={capacityTrackerTotalHoursAgencyWorkedByRegionData}
            capacityTrackerTotalHoursAgencyWorkedByLaData={capacityTrackerTotalHoursAgencyWorkedByLaData}
          />
          <HomePageAddFavouriteMetricsPanel />
        </div>
      </div>
    </Layout>
  );
}
