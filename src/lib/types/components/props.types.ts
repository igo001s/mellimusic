// Types
import type { SelectedPeriod } from '#lib/types/components/elements.types.ts';

export type IconProps = {
	iconClass: string;
};

export type LogoProps = {
	logoClass: string;
};

export type AsideMyMusicalProfileProps = {
	isAsideOpen: boolean;
	selectedPeriod: SelectedPeriod;
	closeAside: () => void;
	selectPeriod: (sectionId: 'artists' | 'songs' | '', period: string) => void;
};
