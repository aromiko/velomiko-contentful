import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHeroFields {
    title: EntryFieldTypes.Symbol;
    body?: EntryFieldTypes.RichText;
    variant?: EntryFieldTypes.Symbol<"Default" | "Image Bottom" | "Image Left" | "Image Top">;
    image?: EntryFieldTypes.AssetLink;
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, "hero">;
export type TypeHero<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeroSkeleton, Modifiers, Locales>;
export type TypeHeroWithoutLinkResolutionResponse = TypeHero<"WITHOUT_LINK_RESOLUTION">;
export type TypeHeroWithoutUnresolvableLinksResponse = TypeHero<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeHeroWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeHero<"WITH_ALL_LOCALES", Locales>;
export type TypeHeroWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeHero<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeHeroWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeHero<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
