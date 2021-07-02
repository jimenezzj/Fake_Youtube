const UrlHandler = () => {

    const URL = "https://bootcamp-users.herokuapp.com";
    const URL_FILTERS = [];
    const END_POPINT = [];


    const addParam = (key, value) => {
        const paramsValue = key + "=" + value;
        URL_FILTERS.push(paramsValue);
    };

    const getParams = () => [...URL_FILTERS];

    const addEndPointVal = (endVal = "") => {
        if (endVal) END_POPINT.push(endVal);
    }
    const getEndPointList = () => [...END_POPINT];

    const getParsedURL = (endPoint = false, params = false) => {
        let urlRes = URL;
        if (endPoint) urlRes = urlRes.concat("/", getEndPointListStrg()); // should get end poinr setted into the obj
        if (params) urlRes = urlRes.concat("?", getParamsStrg());
        return urlRes;
    }

    const getParamsStrg = () => URL_FILTERS.join("&");
    const getEndPointListStrg = () => END_POPINT.join("/");

    return {
        addParam,
        getParams,
        getParsedURL,
        addEndPointVal,
        getEndPointList
    }
}

export default UrlHandler;