import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngagementComponent } from './pages/engagement/engagement.component';
import { ManagementComponent } from './pages/management/management.component';
import { CompetenceComponent } from './pages/competence/competence.component';
import { DefectmanagementComponent } from './pages/defectmanagement/defectmanagement.component';
import { EnvironmentComponent } from './pages/environment/environment.component';
import { MethodicalApproachComponent } from './pages/methodical-approach/methodical-approach.component';
import { MetricsComponent } from './pages/metrics/metrics.component';
import { ParticipationComponent } from './pages/participation/participation.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { ProfessionalismComponent } from './pages/professionalism/professionalism.component';
import { ReportingComponent } from './pages/reporting/reporting.component';
import { TestdesignComponent } from './pages/testdesign/testdesign.component';
import { TestorganisationComponent } from './pages/testorganisation/testorganisation.component';
import { TestprocessmanagementComponent } from './pages/testprocessmanagement/testprocessmanagement.component';
import { TeststrategyComponent } from './pages/teststrategy/teststrategy.component';
import { TestwaremanagementComponent } from './pages/testwaremanagement/testwaremanagement.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CommunicationComponent } from './pages/communication/communication.component';

export const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'engagement', component: EngagementComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'competence', component: CompetenceComponent },
  { path: 'communication', component: CommunicationComponent },
  { path: 'defectmanagement', component: DefectmanagementComponent },
  { path: 'environment', component: EnvironmentComponent },
  { path: 'methodical-approach', component: MethodicalApproachComponent},
  { path: 'metrics', component: MetricsComponent},
  { path: 'participation', component: ParticipationComponent},
  { path: 'planning', component: PlanningComponent},
  { path: 'professionalism', component: ProfessionalismComponent},
  { path: 'reporting', component: ReportingComponent},
  { path: 'testdesign', component: TestdesignComponent},
  { path: 'testorganisation', component: TestorganisationComponent},
  { path: 'testprocessmanagement', component: TestprocessmanagementComponent},
  { path: 'teststrategy', component: TeststrategyComponent},
  { path: 'testwaremanagement', component: TestwaremanagementComponent},
  { path: 'tools', component: ToolsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}