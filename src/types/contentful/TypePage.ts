import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCardCollectionSkeleton } from "./TypeCardCollection";
import type { TypeHeroSkeleton } from "./TypeHero";

export interface TypePageFields {
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardCollectionSkeleton | TypeHeroSkeleton>>;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;
export type TypePageWithoutLinkResolutionResponse = TypePage<"WITHOUT_LINK_RESOLUTION">;
export type TypePageWithoutUnresolvableLinksResponse = TypePage<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePage<"WITH_ALL_LOCALES", Locales>;
export type TypePageWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePage<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePageWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePage<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
