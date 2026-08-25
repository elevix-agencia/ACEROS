import { SectorPage, sectorMetadata } from '../sector-page';

export const metadata = sectorMetadata('naval');

export default function Page() {
  return <SectorPage slug="naval" />;
}
