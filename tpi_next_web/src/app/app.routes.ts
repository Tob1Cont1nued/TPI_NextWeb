import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngagementComponent } from './pages/1_engagement/engagement.component';
import { ParticipationComponent } from './pages/2_participation/participation.component';
import { TeststrategyComponent } from './pages/3_teststrategy/teststrategy.component';
import { TestorganisationComponent } from './pages/4_testorganisation/testorganisation.component';
import { CommunicationComponent } from './pages/5_communication/communication.component';
import { TestprocessmanagementComponent } from './pages/7_testprocessmanagement/testprocessmanagement.component';
import { ReportingComponent } from './pages/6_reporting/reporting.component';
import { PlanningComponent } from './pages/8_planning/planning.component';
import { MetricsComponent } from './pages/9_metrics/metrics.component';
import { DefectmanagementComponent } from './pages/10_defectmanagement/defectmanagement.component';
import { TestwaremanagementComponent } from './pages/11_testwaremanagement/testwaremanagement.component';
import { MethodicalApproachComponent } from './pages/12_methodical-approach/methodical-approach.component';
import { ProfessionalismComponent } from './pages/13_professionalism/professionalism.component';
import { TestdesignComponent } from './pages/14_testdesign/testdesign.component';
import { ToolsComponent } from './pages/15_tools/tools.component';
import { EnvironmentComponent } from './pages/16_environment/environment.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component.spec';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'engagement', component: EngagementComponent },
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
  { path: 'tools', component: ToolsComponent},
  { path: 'evaluation', component: EvaluationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}