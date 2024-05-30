import { MinMax } from "@spt-diffpatch/models/common/MinMax";
import { WindDirection } from "@spt-diffpatch/models/enums/WindDirection";
import { IBaseConfig } from "@spt-diffpatch/models/spt/config/IBaseConfig";

export interface IWeatherConfig extends IBaseConfig
{
    kind: "aki-weather";
    acceleration: number;
    weather: Weather;
    forceWinterEvent: boolean;
}

export interface Weather
{
    clouds: WeatherSettings<string>;
    windSpeed: WeatherSettings<number>;
    windDirection: WeatherSettings<WindDirection>;
    windGustiness: MinMax;
    rain: WeatherSettings<number>;
    rainIntensity: MinMax;
    fog: WeatherSettings<string>;
    temp: MinMax;
    pressure: MinMax;
}

export interface WeatherSettings<T>
{
    values: T[];
    weights: number[];
}