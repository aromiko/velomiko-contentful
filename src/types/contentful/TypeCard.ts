import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCardFields {
    title: EntryFieldTypes.Symbol;
    body: EntryFieldTypes.Symbol;
    slug?: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
}

export type TypeCardSkeleton = EntrySkeletonType<TypeCardFields, "card">;
export type TypeCard<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCardSkeleton, Modifiers, Locales>;
export type TypeCardWithoutLinkResolutionResponse = TypeCard<"WITHOUT_LINK_RESOLUTION">;
export type TypeCardWithoutUnresolvableLinksResponse = TypeCard<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeCardWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeCard<"WITH_ALL_LOCALES", Locales>;
export type TypeCardWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeCard<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeCardWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeCard<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
