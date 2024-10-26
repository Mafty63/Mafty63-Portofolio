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
	public isModalOpen = false;  // Untuk kontrol tampilan pop-up
	public selectedProject: any; // Menyimpan data proyek yang diklik

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}

	// Buka pop-up dan simpan data proyek yang diklik
	openModal(project: any) {
		this.selectedProject = project;
		this.isModalOpen = true;
		this.changeDetectorRef.detectChanges(); // Deteksi perubahan
	}

	// Tutup pop-up dan reset data proyek
	closeModal() {
		this.isModalOpen = false;
		this.selectedProject = null;
		this.changeDetectorRef.detectChanges(); // Deteksi perubahan
	}
}
