import { useEffect, useState } from "react";

export default function PokemonCard({ name = "pikachu" }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        async function load() {
            try {
                setLoading(true);
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
                signal: controller.signal,
                });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const json = await res.json();
                setData(json);
                } 
            catch (e) {
                if (e.name !== "AbortError") setError(e.message);
            } 
            finally {
                setLoading(false);
            }
        }

        load();
        return () => controller.abort();
    }, [name]);

    if (loading) return <p>Cargando…</p>;
    if (error) return <p>Ups: {error}</p>;

    const sprite =
    data?.sprites?.other?.["official-artwork"]?.front_default ||
    data?.sprites?.front_default;

    if(!data) return <p>No hay datos aun...</p>
    return (
        <article className="card">
            <h2 className="card__title"> {data.name.toUpperCase()} #{data.id}</h2>
            <img src={sprite} alt={data.name} width={200} height={200} />
            <p><b>Types:</b> {data.types.map(t => t.type.name).join(", ")}</p>
            <p><b>Height:</b> {data.height * 10}cm |  <b>Weight:</b> {data.weight*0.1}kg </p>
            <ul className="list">
                {data.stats.map(s => (
                <li className="list-item" key={s.stat.name}>
                <b>{s.stat.name}:</b> {s.base_stat}
                </li>
            ))}
            </ul>
        </article>
    );
}
