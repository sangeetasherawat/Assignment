import wretch from 'wretch';
import { GIPHY_API_KEY } from '../../utils/constants';
import { GetGifListArgs } from '../home/type';
export class GifService {
    static url: string = 'https://api.giphy.com/v1';

    public static fetchGifList(args: GetGifListArgs) {

        console.log('args', args);
        return wretch(
            `${GifService.url}/gifs/search?q=` + args.q + '&api_key=' + GIPHY_API_KEY + '&limit=' + args.limit + '&lang=en',
        )
            .get()
            .json(response => response);
    }



}
