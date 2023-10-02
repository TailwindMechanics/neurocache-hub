import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

async function Countries() {
	const supabase = createServerComponentClient({ cookies });

	const { data: countries } = await supabase.from("countries").select();

	return (
		<ul className="text-foreground my-auto">
			{countries?.map((country) => (
				<li key={country.id}>{country.name}</li>
			))}
		</ul>
	);
}

export default Countries;
