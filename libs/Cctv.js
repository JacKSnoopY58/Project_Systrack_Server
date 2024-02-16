const mysql = require('mysql');

module.exports = {
    createCctv: async (pool, ipcAddress, ipcName, ipcStatus, cctvPlaceId) => {
        var sql = "INSERT INTO tbl_ipc (ipc_address, ipc_name, ipc_status, place_id) " 
                + "VALUES (?,?,?,?)";
        sql = mysql.format(sql, [ipcAddress, ipcName, ipcStatus, cctvPlaceId]);

        return await pool.query(sql);
    },

    getByIpcId: async (pool, ipcId) => {
        var sql = "SELECT * FROM tbl_ipc WHERE ipc_id = ?";
        sql = mysql.format(sql, [ipcId]);

        return await pool.query(sql);
    },

    updateCctv: async (pool, ipcId, ipAddress, ipcName, ipcStatus, cctvPlaceId) => {
        var sql = "UPDATE tbl_ipc SET "
                + "ipc_address=?,"
                + "ipc_name=?,"
                + "ipc_status=?, "
                + "place_id=? "
                + "WHERE ipc_id = ?";
        sql = mysql.format(sql, [ipAddress, ipcName, ipcStatus, cctvPlaceId, ipcId]);

        return await pool.query(sql);
    },

    deleteCctv: async (pool, ipcId) => {
        var sql = "DELETE FROM tbl_ipc WHERE ipc_id = ?";
        sql = mysql.format(sql, [ipcId]);

        return await pool.query(sql);
    }

}