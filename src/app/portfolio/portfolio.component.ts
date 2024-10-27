import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

declare var data: any;

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
	public portfolioData = data['Portfolio'];
	public isModalOpen = false;
	public selectedProject: any;

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}

	openModal(project: any) {
		this.selectedProject = project;
		this.isModalOpen = true;
		this.changeDetectorRef.detectChanges();
	}

	closeModal() {
		this.isModalOpen = false;
		this.selectedProject = null;
		this.changeDetectorRef.detectChanges();
	}

	get jobsList(): string[] {
		return this.selectedProject?.jobs ? this.selectedProject.jobs.split(';').map((job: string) => job.trim()) : [];
	}
}