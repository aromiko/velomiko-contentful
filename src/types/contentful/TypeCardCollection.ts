import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCardSkeleton } from "./TypeCard";

export interface TypeCardCollectionFields {
    title?: EntryFieldTypes.Symbol;
    body?: EntryFieldTypes.RichText;
    cards: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardSkeleton>>;
}

export type TypeCardCollectionSkeleton = EntrySkeletonType<TypeCardCollectionFields, "cardCollection">;
export type TypeCardCollection<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCardCollectionSkeleton, Modifiers, Locales>;
export type TypeCardCollectionWithoutLinkResolutionResponse = TypeCardCollection<"WITHOUT_LINK_RESOLUTION">;
export type TypeCardCollectionWithoutUnresolvableLinksResponse = TypeCardCollection<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeCardCollectionWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeCardCollection<"WITH_ALL_LOCALES", Locales>;
export type TypeCardCollectionWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeCardCollection<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeCardCollectionWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeCardCollection<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
