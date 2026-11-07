import { PromoStrip, S01Hero, S02Work, S03StudentVisit, S04FamilyBusiness, S05Residency, S06Citizenship } from "../sections/Part1";
import { S07Eligibility, S08Destinations, S09Stats, S10Process, S11Plans, S12Documents, S13Tracker } from "../sections/Part2";
import { S14Experts, S15Stories, S16Privacy, S17Appeals, S18Express, S19Faq, S20Help } from "../sections/Part3";

export default function Home() {
  return (
    <main>
      <PromoStrip />
      <div className="flex flex-col gap-3 bg-white">
        <S01Hero />
        <S02Work />
        <S03StudentVisit />
        <S04FamilyBusiness />
        <S05Residency />
        <S06Citizenship />
      </div>
      <S07Eligibility />
      <S08Destinations />
      <S09Stats />
      <S10Process />
      <S11Plans />
      <S12Documents />
      <S13Tracker />
      <S14Experts />
      <S15Stories />
      <S16Privacy />
      <div className="bg-white pb-3 pt-3">
        <S17Appeals />
      </div>
      <S18Express />
      <S19Faq />
      <S20Help />
    </main>
  );
}
