

const formatResponse = (data) => {
    return {
        success: true,
        data,
    };
};

export const middleFunctionCall = async (fun, req, res) => {
    try {
        const result = await fun(req, res);
        res.json(formatResponse(result));
    } catch (e) {
        res.status(501).json({
            success: false,
            error: e,
        });
    }
};