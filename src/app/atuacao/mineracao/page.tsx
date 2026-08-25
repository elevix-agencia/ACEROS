import { SectorPage, sectorMetadata } from '../sector-page';

export const metadata = sectorMetadata('mineracao');

export default function Page() {
  return <SectorPage slug="mineracao" />;
}
