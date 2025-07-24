import SelectInput from "../shared/SelectInputProps";
import HeroTabs from "./HeroTabs";
import HeroTemplate from "./HeroTemplate"
import { tabConfig } from "@/data/tabConfig";
import SearchButton from "./SearchButton";


const Hero = () => { 
  const tabData = 
    tabConfig.map((tab) => ({
    label: (
      <div className="flex gap-2.5 items-center">
        {tab.icon}
        <span className="font-semibold [line-height:100%] text-lg">{tab.label}</span>
      </div>
    ),
    content: (
      <div className="p-4 flex flex-wrap gap-2 md:gap-4 items-end">
        {tab.fields.map((field) => (
          <SelectInput
            key={field.id}
            id={field.id}
            label={field.label}
            icon={field.icon}
            options={field.options}
            placeholder={field.placeholder}
          />
        ))}
        <div>
          <SearchButton />
        </div>
      </div>
    ),
  }))
  ;

  return (
    <HeroTemplate 
      bgUrl="hero"
      title="Enjoy in the best way!"
      desc="Enjoy our services for your trip anytime"
      items={
        <HeroTabs tabs={tabData} />
      } 
    />
  )
}

export default Hero
