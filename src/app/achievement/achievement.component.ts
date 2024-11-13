import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, AfterViewInit, HostListener } from '@angular/core';

declare var data: any;
declare var VanillaTilt: any;

@Component({
	selector: 'app-achievement',
	templateUrl: './achievement.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit, AfterViewInit {
	public achievementData = data['Achievement'];
	public darkTheme: boolean = true; // This can be set dynamically or from user preferences
	public checkScreenSize: boolean = window.innerWidth >= 768;

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		// Detach ChangeDetectorRef to optimize performance
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}

	ngAfterViewInit(): void {
		if (this.checkScreenSize) {
			let box: any = document.querySelectorAll('.box');
			VanillaTilt.init(box, {
				max: 25,
				speed: 400,
				startX: 0,
				startY: 0,
				scale: 1.03
			});
		}
	}

	// Toggle dark theme like in the TrainingComponent
	toggleDarkTheme(): void {
		this.darkTheme = !this.darkTheme;
		this.changeDetectorRef.detectChanges();
	}

	// Listen for window resize to dynamically update screen size check
	@HostListener('window:resize', ['$event'])
	onResize(event: any): void {
		this.checkScreenSize = window.innerWidth >= 768;
		this.changeDetectorRef.detectChanges();
	}
}
