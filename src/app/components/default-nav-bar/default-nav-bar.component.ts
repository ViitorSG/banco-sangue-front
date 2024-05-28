import { Component } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { MatIcon } from "@angular/material/icon";
import { MatButton, MatButtonModule, MatIconButton } from "@angular/material/button";
import { NgOptimizedImage } from "@angular/common";
import { Localization } from "../../core/translations/strings";
import { CandidateStatusService } from "../../core/service/candidatesStatusService/candidatesStatusService";
import { CandidateService } from "../../core/service/candidateService/candidateService";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-default-nav-bar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatButton,
    NgOptimizedImage,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './default-nav-bar.component.html',
  styleUrl: './default-nav-bar.component.css'
})

export class DefaultNavBarComponent {
  strings = Localization.getStrings();

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.uploadFile(file);
  }

  uploadFile(file: File) {
    CandidateService.createCandidates(file).then(() => {
      this.getCandidates();
    });
  }

  async getCandidates() {
    try {
      const candidates = await CandidateService.getCandidates();
      if (candidates) {
        this.refreshPage()
      } else {
        console.error('Error fetching candidates');
      }
    } catch (error) {
      console.error('Error fetching candidates', error);
    }
  }

  refreshPage() {
    window.location.reload();
  }
}
