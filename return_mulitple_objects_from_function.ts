
  const rackMax: number = 20;
  const rowMax: number = 6;
  interface Block {
    "draw_lines": number;
    "x_location": string;
    "y_location": string;
    "z_location": string;
    "x_dimension": string;
    "y_dimension": string;
    "z_dimension": string;
    "rgb_block_red": string;
    "rgb_block_green": string;
    "rgb_block_blue": string;
    "rgb_line_red": string;
    "rgb_line_green": string;
    "rgb_line_blue": string;
  }
  interface Rack {
    "id": string;
    "facing": number;
    "rack_units": number;
    "u_allocated_kw": number;
    "u_environment": string;
    "u_equip_design_kw": number;
    "u_equip_kw_consume_design": number;
    "u_facil_design_kw": number;
    "u_max_alloc": number;
    "u_qty_alloc": number;
    "u_rack_state": string;
  }

  var rackResult = fakeRacks(rowMax,rackMax);
  console.log(rackResult)
  var rackData: Record<string, Rack> = rackResult["tempRackData"];
  var rackBlocks: Record<string, Block> = rackResult["tempRackBlocks"];


  function fakeRacks(rowMax: number, rackMax: number){
    var facing: number = 0;
    var rackCount: number = 0;
    var tempRackData: Record<string, Rack> = {};
    var tempRackBlocks: Record<string, Block> = {};
    var rackName: string;
    var xloop: number;
    var yloop: number;
    for (yloop = 0; yloop < rowMax; yloop++){
      for (xloop = 0; xloop < rackMax; xloop++){
        if (yloop % 2 == 0){
          facing = 1;
        } else {
          facing = 3;
        }
        rackName = "rack_" + xloop + "_" + yloop;
        tempRackBlocks[rackName] = {
          "draw_lines": 1,
          "rgb_block_red": "1.0",
          "rgb_block_green": "1.0",
          "rgb_block_blue": "1.0",
          "rgb_line_red": "0.5",
          "rgb_line_green": "0.5",
          "rgb_line_blue": "0.5",
          "x_location": (4 + 0.3 + (xloop * 0.6)).toString(),
          "y_location": (4 + 1.2 + (yloop * 2.4)).toString(),
          "z_location": "1.2",
          "x_dimension": "0.58",
          "y_dimension": "1.2",
          "z_dimension": "1.2"
        }
        tempRackData[rackName] = {
          "id": rackCount.toString(),
          "facing": facing,
          "rack_units": 50,
          "u_allocated_kw": 10,
          "u_environment": "test",
          "u_equip_design_kw": 12,
          "u_equip_kw_consume_design": 20,
          "u_facil_design_kw": 16,
          "u_max_alloc": 10,
          "u_qty_alloc": xloop % 10,
          "u_rack_state": "Landed"
        }
        rackCount++;
      }
    }
    return {tempRackData, tempRackBlocks};
  }