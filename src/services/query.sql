DECLARE @hasWallet as INT = 0
SELECT
    TOP 1 @hasWallet = 1
FROM
    wallet
WHERE
    iduser = 12 IF (@hasWallet = 1) PRINT 'Yes'
    ELSE PRINT 'No';