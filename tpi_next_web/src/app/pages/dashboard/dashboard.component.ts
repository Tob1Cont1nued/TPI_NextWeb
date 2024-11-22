import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  engagementData: { Value: number, MaxValue: number } | null = null;
  participationData: { Value: number, MaxValue: number } | null = null;
  testStrategyData: { Value: number, MaxValue: number } | null = null;
  testOrganisationData: { Value: number, MaxValue: number } | null = null;
  communicationData: { Value: number, MaxValue: number } | null = null;
  reportingData: { Value: number, MaxValue: number } | null = null;
  testProcessManagementData: { Value: number, MaxValue: number } | null = null;
  planningData: { Value: number, MaxValue: number } | null = null;
  metricsData: { Value: number, MaxValue: number } | null = null;
  defectManagementData: { Value: number, MaxValue: number } | null = null;
  testwareManagementData: { Value: number, MaxValue: number } | null = null;
  methodicalApproachData: { Value: number, MaxValue: number } | null = null;
  professionalismData: { Value: number, MaxValue: number } | null = null;
  testDesignData: { Value: number, MaxValue: number } | null = null;
  toolsData: { Value: number, MaxValue: number } | null = null;
  environmentData: { Value: number, MaxValue: number } | null = null;

  constructor() { }

  ngOnInit(): void {}

  // Methoden um Daten von den Seiten zu erhalten
  setEngagementData(data: { Value: number, MaxValue: number }): void {
    this.engagementData = data;
  }

  setParticipationData(data: { Value: number, MaxValue: number }): void {
    this.participationData = data;
  }

  setTestStrategyData(data: { Value: number, MaxValue: number }): void {
    this.testStrategyData = data;
  }

  setTestOrganisationData(data: { Value: number, MaxValue: number }): void {
    this.testOrganisationData = data;
  }

  setCommunicationData(data: { Value: number, MaxValue: number }): void {
    this.communicationData = data;
  }

  setReportingData(data: { Value: number, MaxValue: number }): void {
    this.reportingData = data;
  }

  setTestProcessManagementData(data: { Value: number, MaxValue: number }): void {
    this.testProcessManagementData = data;
  }

  setPlanningData(data: { Value: number, MaxValue: number }): void {
    this.planningData = data;
  }

  setMetricsData(data: { Value: number, MaxValue: number }): void {
    this.metricsData = data;
  }

  setDefectManagementData(data: { Value: number, MaxValue: number }): void {
    this.defectManagementData = data;
  }

  setTestwareManagementData(data: { Value: number, MaxValue: number }): void {
    this.testwareManagementData = data;
  }

  setMethodicalApproachData(data: { Value: number, MaxValue: number }): void {
    this.methodicalApproachData = data;
  }

  setProfessionalismData(data: { Value: number, MaxValue: number }): void {
    this.professionalismData = data;
  }

  setTestDesignData(data: { Value: number, MaxValue: number }): void {
    this.testDesignData = data;
  }

  setToolsData(data: { Value: number, MaxValue: number }): void {
    this.toolsData = data;
  }

  setEnvironmentData(data: { Value: number, MaxValue: number }): void {
    this.environmentData = data;
  }
 
}
