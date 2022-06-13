import { CoreModule } from './../core/core.module';
import { PipeModule } from './../shared/pipe/app-pipe.module';
import { StarModule } from './../shared/component/star/star.module';
import { StarComponent } from './../shared/component/star/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { NgModule } from '@angular/core';
import { ReplacePipe } from './../shared/pipe/replace.pipe';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
    ], imports:[
      CommonModule,
      FormsModule,
      StarModule,
      PipeModule,
      RouterModule.forChild([
                {
                path: 'courses', component: CourseListComponent
              },
              {
                path: 'courses/info/:id', component: CourseInfoComponent
              }
        ])
    ]
})
export class CourseModule {

}