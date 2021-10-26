import { Box, Card, CardContent, CardHeader } from "@material-ui/core";
import React from "react";

export const CardContents = (props) => {
  const { header, actionHeader, children, style } = props;

  return (
    <Box className="card-container" style={style}>
      <Card>
        <CardHeader
          disableTypography
          title={header}
          action={actionHeader}
          style={{ borderBottom: "1px solid #ddd" }}
        />
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );
};
