const data = {
    "sepal.length": [5.1, 4.9, 4.7, 4.6, 5.0, 5.4, 4.6, 5.0, 4.4, 4.9, 5.4, 4.8, 4.8, 4.3, 5.8, 5.7, 5.4, 5.1, 5.7, 5.1, 5.4, 5.1, 4.6, 5.1, 4.8, 5.0, 5.0, 5.2, 5.2, 4.7, 4.8, 5.4, 5.2, 5.5, 4.9, 5.0, 5.5, 4.9, 4.4, 5.1, 5.0, 4.5, 4.4, 5.0, 5.1, 4.8, 5.1, 4.6, 5.3, 5.0, 7.0, 6.4, 6.9, 5.5, 6.5, 5.7, 6.3, 4.9, 6.6, 5.2, 5.0, 5.9, 6.0, 6.1, 5.6, 6.7, 5.6, 5.8, 6.2, 5.6, 5.9, 6.1, 6.3, 6.1, 6.4, 6.6, 6.8, 6.7, 6.0, 5.7, 5.5, 5.5, 5.8, 6.0, 5.4, 6.0, 6.7, 6.3, 5.6, 5.5, 5.5, 6.1, 5.8, 5.0, 5.6, 5.7, 5.7, 6.2, 5.1, 5.7, 6.3, 5.8, 7.1, 6.3, 6.5, 7.6, 4.9, 7.3, 6.7, 7.2, 6.5, 6.4, 6.8, 5.7, 5.8, 6.4, 6.5, 7.7, 7.7, 6.0, 6.9, 5.6, 7.7, 6.3, 6.7, 7.2, 6.2, 6.1, 6.4, 7.2, 7.4, 7.9, 6.4, 6.3, 6.1, 7.7, 6.3, 6.4, 6.0, 6.9, 6.7, 6.9, 5.8, 6.8, 6.7, 6.7, 6.3, 6.5, 6.2, 5.9],
    "sepal.width":  [3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0, 2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0],
    "petal.length": [1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1.0, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4, 4.7, 4.5, 4.9, 4.0, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4.0, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4.0, 4.9, 4.7, 4.3, 4.4, 4.8, 5.0, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4.0, 4.4, 4.6, 4.0, 3.3, 4.2, 4.2, 4.2, 4.3, 3.0, 4.1, 6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5.0, 5.1, 5.3, 5.5, 6.7, 6.9, 5.0, 5.7, 4.9, 6.7, 4.9, 5.7, 6.0, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5.0, 5.2, 5.4, 5.1],
    "petal.width":  [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3, 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
    "variety":      ["Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Setosa", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Versicolor", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica", "Virginica"]
};
const iris_setosa = {
    "sepal.length": data["sepal.length"].filter((_, idx) => data["variety"][idx] == "Setosa"),
    "sepal.width":  data["sepal.width"] .filter((_, idx) => data["variety"][idx] == "Setosa"),
    "petal.length": data["petal.length"].filter((_, idx) => data["variety"][idx] == "Setosa"),
    "petal.width":  data["petal.width"] .filter((_, idx) => data["variety"][idx] == "Setosa"),
    "variety":      data["variety"]     .filter((_, idx) => data["variety"][idx] == "Setosa"),
};
const iris_versicolor = {
    "sepal.length": data["sepal.length"].filter((_, idx) => data["variety"][idx] == "Versicolor"),
    "sepal.width":  data["sepal.width"] .filter((_, idx) => data["variety"][idx] == "Versicolor"),
    "petal.length": data["petal.length"].filter((_, idx) => data["variety"][idx] == "Versicolor"),
    "petal.width":  data["petal.width"] .filter((_, idx) => data["variety"][idx] == "Versicolor"),
    "variety":      data["variety"]     .filter((_, idx) => data["variety"][idx] == "Versicolor"),
};
const iris_virginica = {
    "sepal.length": data["sepal.length"].filter((_, idx) => data["variety"][idx] == "Virginica"),
    "sepal.width":  data["sepal.width"] .filter((_, idx) => data["variety"][idx] == "Virginica"),
    "petal.length": data["petal.length"].filter((_, idx) => data["variety"][idx] == "Virginica"),
    "petal.width":  data["petal.width"] .filter((_, idx) => data["variety"][idx] == "Virginica"),
    "variety":      data["variety"]     .filter((_, idx) => data["variety"][idx] == "Virginica"),
};

function makeHistgram(array, begin, end, width) {
    res = [];
    cur = begin;
    while (cur < end) {
        next_cur = cur + width;
        num = array.filter((elm) => cur <= elm && elm < next_cur).length;
        res.push(num);
        cur = next_cur;
    }
    return res;
}

function linspace(begin, end, steps) {
    res = [];
    cur = begin;
    while (cur < end) {
        next_cur = cur + width;
        res.push((cur + next_cur) / 2.0);
        cur = next_cur;
    }
    return res;
}

window.onload = () => {
    // Histgram ------------------------------------------------------
    const sepal_length_hist = bb.generate({
        bindto: "#sepal_length_hist",
        title: {
            text: "Sepal Length"
        },
        data: {
            types: {
                Setosa:     "area-step",
                Versicolor: "area-step",
                Virginica:  "area-step",
            },
            xs: {
                Setosa:     "Setosa_x",
                Versicolor: "Versicolor_x",
                Virginica:  "Virginica_x",
            },
            columns: [
                ["Setosa_x"].concat(linspace(4.0, 8.0, 0.25)),
                ["Setosa"]  .concat(makeHistgram(iris_setosa    ["sepal.length"], 4.0, 8.0, 0.25)),
                ["Versicolor_x"].concat(linspace(4.0, 8.0, 0.25)),
                ["Versicolor"]  .concat(makeHistgram(iris_versicolor["sepal.length"], 4.0, 8.0, 0.25)),
                ["Virginica_x"].concat(linspace(4.0, 8.0, 0.25)),
                ["Virginica"]  .concat(makeHistgram(iris_virginica ["sepal.length"], 4.0, 8.0, 0.25)),
            ]
        }
    });
    sepal_length_hist.resize({height: 320, width: 320});

    const sepal_width_hist = bb.generate({
        bindto: "#sepal_width_hist",
        title: {
            text: "Sepal Width"
        },
        data: {
            types: {
                Setosa:     "area-step",
                Versicolor: "area-step",
                Virginica:  "area-step",
            },

            columns: [
                ["Setosa"]    .concat(makeHistgram(iris_setosa    ["sepal.width"], 2.0, 4.5, 0.25)),
                ["Versicolor"].concat(makeHistgram(iris_versicolor["sepal.width"], 2.0, 4.5, 0.25)),
                ["Virginica"] .concat(makeHistgram(iris_virginica ["sepal.width"], 2.0, 4.5, 0.25)),
            ]
        }
    });
    sepal_width_hist.resize({height: 320, width: 320});

    const petal_length_hist = bb.generate({
        bindto: "#petal_length_hist",
        title: {
            text: "Petal Length"
        },
        data: {
            types: {
                Setosa:     "area-step",
                Versicolor: "area-step",
                Virginica:  "area-step",
            },

            columns: [
                ["Setosa"]    .concat(makeHistgram(iris_setosa    ["petal.length"], 1.0, 7.0, 0.25)),
                ["Versicolor"].concat(makeHistgram(iris_versicolor["petal.length"], 1.0, 7.0, 0.25)),
                ["Virginica"] .concat(makeHistgram(iris_virginica ["petal.length"], 1.0, 7.0, 0.25)),
            ]
        }
    });
    petal_length_hist.resize({height: 320, width: 320});

    const petal_width_hist = bb.generate({
        bindto: "#petal_width_hist",
        title: {
            text: "Petal Width"
        },
        data: {
            types: {
                Setosa:     "area-step",
                Versicolor: "area-step",
                Virginica:  "area-step",
            },

            columns: [
                ["Setosa"]    .concat(makeHistgram(iris_setosa    ["petal.width"], 0.0, 2.75, 0.25)),
                ["Versicolor"].concat(makeHistgram(iris_versicolor["petal.width"], 0.0, 2.75, 0.25)),
                ["Virginica"] .concat(makeHistgram(iris_virginica ["petal.width"], 0.0, 2.75, 0.25)),
            ]
        }
    });
    petal_width_hist.resize({height: 320, width: 320});

    // Scatter ------------------------------------------------------
    const sepal_scatter = bb.generate({
        bindto: "#sepal_scatter",
        title: {
            text: "Sepal"
        },
        data: {
            type: "scatter",
            xs: {
                Setosa:     "Setosa_x",
                Versicolor: "Versicolor_x",
                Virginica:  "Virginica_x",
            },
            columns: [
                ["Setosa_x"].concat(iris_setosa["sepal.length"]),
                ["Setosa"]  .concat(iris_setosa["sepal.width" ]),
                ["Versicolor_x"].concat(iris_versicolor["sepal.length"]),
                ["Versicolor"]  .concat(iris_versicolor["sepal.width" ]),
                ["Virginica_x"].concat(iris_virginica["sepal.length"]),
                ["Virginica"]  .concat(iris_virginica["sepal.width" ]),
            ]
        },
        zoom: {
            enabled: true
        },
        axis: {
            x: {
                label: "sepal length",
                tick: {
                    fit: false
                }
            },
            y: {
                label: "sepal width"
            }
        },
    });
    sepal_scatter.resize({height: 320, width: 640});

    const petal_scatter = bb.generate({
        bindto: "#petal_scatter",
        title: {
            text: "Petal"
        },
        data: {
            type: "scatter",
            xs: {
                Setosa:     "Setosa_x",
                Versicolor: "Versicolor_x",
                Virginica:  "Virginica_x",
            },
            columns: [
                ["Setosa_x"].concat(iris_setosa["petal.length"]),
                ["Setosa"]  .concat(iris_setosa["petal.width" ]),
                ["Versicolor_x"].concat(iris_versicolor["petal.length"]),
                ["Versicolor"]  .concat(iris_versicolor["petal.width" ]),
                ["Virginica_x"].concat(iris_virginica["petal.length"]),
                ["Virginica"]  .concat(iris_virginica["petal.width" ]),
            ]
        },
        zoom: {
            enabled: true
        },
        axis: {
            x: {
                label: "petal length",
                tick: {
                    fit: false
                }
            },
            y: {
                label: "petal width"
            }
        },
    });
    petal_scatter.resize({height: 320, width: 640});

    sepal_length_hist.load();
    sepal_width_hist.load();
    petal_length_hist.load();
    petal_width_hist.load();
    sepal_scatter.load();
    petal_scatter.load();
};
