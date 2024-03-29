import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../componentes/components/ui/command";

function AboutPage() {
  return (
    <section className="container mx-auto">
      <div>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
      <h3 className="text-4xl font-bold my-5">About</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum harum
        fuga a consequatur ipsa hic nemo maiores esse officiis, quisquam alias
        facere suscipit possimus beatae quidem quasi numquam necessitatibus
        excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Architecto optio eveniet aliquid delectus neque assumenda, corporis quos
        velit voluptatibus voluptates quidem deleniti earum fugit, ipsum
        consequatur impedit quibusdam ab! At!
      </p>
    </section>
  );
}

export default AboutPage;
