import { ref } from 'vue';
import axios from "axios";
import type { Game } from '../../types/Games/game';
export function useGetGames() {
    const games = ref< Game[] >([]);

    interface NullFunction {
        (): void | null
    }
    async function getGames(onSuccess: NullFunction|null = null, onError: NullFunction|null = null, onFinish: NullFunction|null = null) {
        try {
            const res = await axios.get('/applicant-test/');
            games.value = res.data;
            console.log(res.data)
            if(onSuccess) {
                onSuccess();
            }
        } catch(err) {
            if(onError) {
                onError();
            }
        } finally {
            if(onFinish) {
                onFinish();
            }
        }
    }

    return {
        games,
        getGames
    }
}