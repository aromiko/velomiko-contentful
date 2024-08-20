import { cn } from "@/lib/utils";
import { TypeHeroWithoutUnresolvableLinksResponse } from "@/types/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const Hero = ({ fields }: TypeHeroWithoutUnresolvableLinksResponse) => {
  const { title, variant, body, image } = fields;
  console.log(image);

  return (
    <section
      className={cn("py-20 flex flex-col lg:flex-row", {
        default: variant == "Default",
      })}
    >
      <div className="w-100 lg:w-1/2 mb-4 lg:mb-0 lg:pr-4">
        <h1 className="mb-4">{title}</h1>
        {body && documentToReactComponents(body)}
      </div>
      <div className="relative w-100 lg:w-1/2 min-h-80">
        {image && (
          <Image
            className=""
            src={image.fields.file?.url || "/assets/images/img-placeholder.svg"}
            alt={image.fields.description || "Image"}
            fill={true}
            objectFit="cover"
            // objectPosition="top"
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
